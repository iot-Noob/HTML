var index=0;
var fn,ln,age,cid;
var nm,lnm,ags ,_tr ,_id;
$("#fnr").hide();
$("#lnr").hide();
$("#ar").hide();

$(document).ready(function(){
   
 
$("#bta").on('click',function(){
    
 fn=$("#Fname").val();
 ln=$("#Lname").val();
 age=$("#age").val();
 


if(fn==""&&ln==""&&age==""||fn==""||ln==""||age=="") {
 
    if(!fn==""&&!ln==""&&!age==""){
        
        $("#fnr").hide();
        $("#lnr").hide();
        $("#ar").hide();


      }else{

        if(fn==""){
            $("#fnr").show();
          }else{
              $("#fnr").hide();
          } 
          if(ln==""){
              $("#lnr").show();
            }else{
                $("#lnr").hide();
            }
      
            if(age==""){
              $("#ar").show();
            }else{
                $("#ar").hide();
            }

      }

 

    

}else{
    var dtc=`<tr  id="tdr${++index}"> <td>${index}</td> <td>${fn}</td> <td>${ln}</td> <td>${age}</td> <td> <button id="btd" name="bta" type="button" class="btn   btcs"> <span class="material-icons btcs">
    delete
    </span>
     </button>  <button id="bte" name="bte" type="button" class="btn   btcs"> <span class="material-icons btcs">
     edit
     </span> </button> </td> </tr> `;
    $('#mtb').append(dtc);
    $("#Fname").val("");
    $("#Lname").val("");
    $("#age").val("");
}

});   

$("#mtb").on('click','#btd',function(){ //remmove
 
    $(this).closest('tr').remove();
     index--;
});


$("#mtb").on('click','#bte',function(){ //edit
   
 
 _tr=$(this).closest('tr');
  _id=$(_tr).find('td:eq(0)').text();
  cid=_id;

  nm=$(_tr).find('td:eq(1)').text();
 lnm=$(_tr).find('td:eq(2)').text();
 ags=$(_tr).find('td:eq(3)').text();
 $("#Fname").val(nm);
 $("#Lname").val(lnm);
 $("#age").val(ags);




});

$("#btu").click(function(){ //update button
 
    fn=$("#Fname").val();
    ln=$("#Lname").val();
    age=$("#age").val();
   
 update_table();

});

});

async function update_table(){
// alert("Updated!!");
$(_tr).find('td:eq(1)').text(fn);
$(_tr).find('td:eq(2)').text(ln);
$(_tr).find('td:eq(3)').text(age);
}