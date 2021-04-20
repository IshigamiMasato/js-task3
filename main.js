/*global $*/
$(function (){
  searchWord = function(){
   let searchText = $(this).val(),
       targetText;
    
     $('.target_area li').each(function(){
    let targetText = $(this).attr('class');
 　  console.log(targetText)
 　
 　 if(targetText.indexOf(searchText) != -1){
 　    $(this).removeClass('hidden');
 　 }else{
 　    $(this).addClass('hidden');
 　　 }
  　});
  };
  
  $('#search_text').on('input', searchWord);
});