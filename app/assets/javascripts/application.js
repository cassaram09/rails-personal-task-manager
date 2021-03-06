// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
  $( "#show-task" ).click(function() {
    $( ".quick-add" ).slideToggle( "fast", "linear" );
    if ($( "#show-task" ).val() == "Add a Task"){
      $( "#show-task" ).val("Hide");
    } else {
      $( "#show-task" ).val("Add a Task");
    }
  });
  $( "#show" ).click(function() {
    $( ".new-note-toggle" ).slideToggle( "slow", "linear" );
    if ($( "#show" ).val() == "Create a new note"){
      $( "#show" ).val("Hide");
    } else {
      $( "#show" ).val("Create a new note");
    }
  }); 
  $( "#show-profile-options" ).click(function() {
    $( ".profile-options" ).slideToggle( "slow", "swing" );
    if ($( "#show-profile-options" ).val() == "Edit Profile"){
      $( "#show-profile-options" ).val("Hide Options");
    } else {
      $( "#show-profile-options" ).val("Edit Profile");
    }
  });
});