//create task
function createTodo(text) {
  var markup = '<div class="checkbox"><label><input type="checkbox" value="" />'+ text +'</label></div>';
  $('#sortable').append(markup);
  $('.add-todo').val('');
};

//mark task as done
function done(text) {
  var markup =  '<div class="checkbox">' + text +'<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button>';
  $('#done-items').append(markup);
  $('.remove').remove();
};

//remove done task from list
function removeItem(element){
  $(element).parent().remove();
};

//create todo
$('.add-todo').on('keypress', function(e) {
  if (e.keyCode == 13) {
    var todo = $(this).val();
    if (todo != '') {
      createTodo(todo);
    }
  }
});

// mark task as done
$('.todolist').on('change','#sortable input[type="checkbox"]',function() {
  if($(this).prop('checked')){
    var doneItem = $(this).parent().parent().find('label').text();
    $(this).parent().addClass('remove');
    done(doneItem);
  }
});

//delete done task from "already done"
$('#done-items').on('click','.remove-item',function() {
  removeItem(this);
});
