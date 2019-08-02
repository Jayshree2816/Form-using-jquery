     
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
        $("form").toggle()
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
                st = st+ '<td>'+$(this).val()+'</td>';
                $(this).val('');
            })
            $('#details').append('<tr>'+st+'</tr>').append('<button>Edit</button><button id="delete">Delete</button>');
            $("#details button:first").attr("id" , "edit").click(function() {
                $(this).parent().siblings("#myForm").show()
                   // function() {
                    var rowData = $("#details tr").children('td').map(function(){
                        return $(this).text()
                    }).get()
                    $("#firstName").val(rowData[0])
                    $("#lastName").val(rowData[1])
                    $("#contact").val(rowData[2])
                    $("#gender").val(rowData[3])
                //})
            })
            $("form").hide();
            $("#details #delete").click(function(){
                $(this).closest("tr").remove()
                $("#details button").remove()
            })
        }
    })
})
