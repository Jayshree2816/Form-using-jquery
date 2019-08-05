     
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
                st = st+ '<td>'+$(this).val()+'</td>';
                et = '<td><button id="edit">'+ 'Edit' + '</button ><button id ="delete">'+ 'Delete' + '</button></td>'
                $(this).val('');
            })
            $('#details').append('<tr>'+ st +  et + '</tr>');
            $("#details tr td #edit").bind("click",function() {
                $(this).parents().siblings("#myForm").show()
                    var rowData = $("#details tr").children('td').map(function(){
                        return $(this).text()
                    }).get()
                    $("#firstName").val(rowData[0])
                    $("#lastName").val(rowData[1])
                    $("#contact").val(rowData[2])
                    $("#gender").val(rowData[3])
                    
                    $('#submit').click(function(){
                       // $(this).closest('form').find("input[type=text],input[type=tel],select").val("");
                    })
                    e.preventDefault();
            })
            //$("form").hide();
            $("#details #delete").click(function(){
                $(this).closest("tr").remove()
            })
        }
    })
})
