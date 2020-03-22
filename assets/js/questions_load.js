var right_classes = ["bg-success", "text-white"];
var wrong_classes = ["bg-danger", "text-white"];
var total_answers = 0;
var correct_answers = 0;

function checkLimit(comp, limit) {
   if (!comp.checked) {
      return;
   }

   var entities = $("input[name=" + comp.attributes["name"].value + "]");
   for (var i = 0, count = 0; i < entities.length; i++) {
      if (entities[i].checked) {
         count++;
      }
      if (count > limit) {
         comp.checked = false;
         return;
      }
   }
}

function resetAnswer(size) {
   for (var i = 1; i <= size; i++) {
      var comp = $("input[name=Q-" + i + "]");
      for (var j = 0; j < comp.length; j++) {
         comp[j].disabled = false;
         comp[j].checked = false;
         right_classes.forEach(e => $(comp[j]).next().removeClass(e));
         wrong_classes.forEach(e => $(comp[j]).next().removeClass(e));
      }
   }
   buttonsManagement(false);
}

function manageCheckbox(comp) {
   var right = 0;
   var accepted = 0;
   var [is_right, accepted] = comp[0].value.split(",").map(x => parseInt(x));
   total_answers += accepted;
   for (var j = 0; j < comp.length; j++) {
      var is_right = parseInt(comp[j].value.split(",")[0]);
      var choice = comp[j];
      choice.disabled = true;
      if (choice.checked) {
         if (is_right === 1) {
            right_classes.forEach(e => $(choice).next().addClass(e));
            ++correct_answers;
            ++right;
            if (right == accepted) {
               break;
            }
         } else {
            wrong_classes.forEach(e => $(choice).next().addClass(e));
         }
      }
   }
}

function manageRadio(comp) {
   ++total_answers;
   for (var j = 0; j < comp.length; j++) {
      var choice = comp[j];
      choice.disabled = true;
      if (choice.checked) {
         if (choice.value == "1") {
            ++correct_answers;
            right_classes.forEach(e => $(choice).next().addClass(e));
         } else {
            wrong_classes.forEach(e => $(choice).next().addClass(e));
         }
      }
   }
}

function checkAnswer(size) {
   for (var i = 1; i <= size; i++) {
      var comp = $("input[name=Q-" + i + "]");
      if (comp[0].type == "checkbox") {
         manageCheckbox(comp);
      } else if (comp[0].type == "radio") {
         manageRadio(comp);
      }
   }
   buttonsManagement(true);
}

function buttonsManagement(is_send) {
   if (is_send) {
      $("#results").append("<p class='card card-body bg-warning my-2' style='width: 18rem;''>Pontuação: " + correct_answers + " de " + total_answers + "</p>");
      $("#results").css("display", "");
      $("#reset-answer").css("display", "");
      $("#send-answer").css("display", "none");
   } else {
      total_answers = correct_answers = 0;
      $("#reset-answer").css("display", "none");
      $("#send-answer").css("display", "");
      $("#results").empty();
   }
}