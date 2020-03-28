var right_classes = ["bg-success", "text-white"];
var wrong_classes = ["bg-danger", "text-white"];

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

function resetAnswer(size, q_name) {
   for (var i = 1; i <= size; i++) {
      var comp = $("input[name=Q-" + i + "-" + q_name + "]");
      for (var j = 0; j < comp.length; j++) {
         comp[j].disabled = false;
         comp[j].checked = false;
         right_classes.forEach(e => $(comp[j]).next().removeClass(e));
         wrong_classes.forEach(e => $(comp[j]).next().removeClass(e));
      }
   }
   buttonsManagement(false, q_name);
}

function manageCheckbox(comp) {
   var right = 0;
   var accepted = 0;
   var [is_right, accepted] = comp[0].value.split(",").map(x => parseInt(x));
   var total_answers = accepted;
   var correct_answers = 0;
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
   return [total_answers, correct_answers];
}

function manageRadio(comp) {
   // ++total_answers;
   var total_answers = 1;
   var correct_answers = 0;
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
   return [total_answers, correct_answers];
}

function checkAnswer(size, q_name) {
   var total_answers = 0;
   var correct_answers = 0;

   for (var i = 1; i <= size; i++) {
      var comp = $("input[name=Q-" + i + "-" + q_name + "]");
      if (comp[0].type == "checkbox") {
         var vals = manageCheckbox(comp);
         total_answers += vals[0];
         correct_answers += vals[1];
      } else if (comp[0].type == "radio") {
         var vals = manageRadio(comp);
         total_answers += vals[0];
         correct_answers += vals[1];
      }
   }
   buttonsManagement(true, q_name, total_answers, correct_answers);
}

function buttonsManagement(is_send, q_name, total_answers, correct_answers) {
   if (is_send) {
      $("#results-" + q_name).append("<p class='card card-body bg-warning my-2' style='width: 18rem;''>Pontuação: " + correct_answers + " de " + total_answers + "</p>");
      $("#results-" + q_name).css("display", "");
      $("#reset-answer-" + q_name).css("display", "");
      $("#send-answer-" + q_name).css("display", "none");
   } else {
      // total_answers = correct_answers = 0;
      $("#reset-answer-" + q_name).css("display", "none");
      $("#send-answer-" + q_name).css("display", "");
      $("#results-" + q_name).empty();
   }
}