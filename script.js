     
// $(document).ready(function(){
//     $("#submitBtn").on("click", function(e){
//         var fname = $("#firstName").val();
//         var lname = $("#lastName").val();
//         var contactNumber = $("#contact").val();

//         if(fname==''||lname==''||contactNumber=='')
//             {
//                 alert("Please Fill All Fields");
//                 // e.preventDefault();
//             } 
//             else {
//                 // $("#t1").html(fname)
//                 // $("#t2").html(lname)
//                 // $("#t3").html(contactNumber)
//                 alert("Form submitted")
//                 e.preventDefault();
//             }
//         })
//     })


$(document).ready(function(){
    $("#add").click(function(){
        $("form").show()
    })
    $("#submit").on("click", function(e) {
        var fname = $("#firstName").val();
        var lname = $("#lastName").val();
        var contactNumber = $("#contact").val();

        if(fname==''||lname==''||contactNumber=='')
            {
                alert("Please Fill All Fields");
                e.preventDefault();
            }
            else {
                var st = "";
                $("#myForm input[type=text],input[type=tel],select").each(function(){
                st = st+ '<td>'+$(this).val()+'</td>' ;
                $(this).val('');
            })
            $('#details').append('<tr>'+st+'</tr>').append('<button>'+ 'Edit' + '</button>');
        }
    })
})


