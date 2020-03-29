var right_classes = ["bg-success", "text-white"];
var correct_answers = 0;

function checkLimit(comp, limit) {
   console.log(comp.value);

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
      }
   }
   $("#reset-answer").css("display", "none");

}

function checkAnswer(size) {
   for (var i = 1; i <= size; i++) {
      var comp = $("input[name=Q-" + i + "]");
      var accepted = 0;
      var right = 0;
      if (comp[0].type == "checkbox") {
         accepted = comp[0].value.split(",")[1];
         console.log("accepted = " + accepted);
         for (var j = 0; j < comp.length; j++) {
            var choice = comp[j];
            choice.disabled = true;
            right_classes.forEach(e => $(choice).next().removeClass(e));
            if (choice.checked) {
               var is_right = choice.value.split(",")[0];
               if (is_right == "1") {
                  right_classes.forEach(e => $(choice).next().addClass(e));
                  console.log(choice);
                  right += 1;
                  if (right == accepted) {
                     break;
                  }
               }
            }
         }
      } else if (comp[0].type == "radio") {
         for (var j = 0; j < comp.length; j++) {
            var choice = comp[j];
            choice.disabled = true;
            right_classes.forEach(e => $(choice).next().removeClass(e));
            if (choice.checked) {
               if (choice.value == "1") {
                  right_classes.forEach(e => $(choice).next().addClass(e));
               }
            }
         }
      }
   }
   $("#reset-answer").css("display", "");
}