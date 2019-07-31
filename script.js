     
$(document).ready(function(){
    $("#submitBtn").on("click", function(e){
        var fname = $("#firstName").val();
        var lname = $("#lastName").val();
        var contactNumber = $("#contact").val();

        if(fname==''||lname==''||contactNumber=='')
            {
                alert("Please Fill All Fields");
                e.preventDefault();
            } 
            else {
                $("#t1").html(fname)
                $("#f2").html(lname)
                $("#f3").html(contactNumber)
                e.preventDefault();
            }
            // $("#modal").on('hide.bs.modal', function(e){
            //     var contentArea = $(this).find('#modalContent');
            //     contentArea.html('');
            // });
    })
})



