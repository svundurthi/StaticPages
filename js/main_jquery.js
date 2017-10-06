$(document).ready(function(){
	$('#add_employee').on('submit',function(e){		
		add_employee(e);

	});

	displayEmployees();


	function add_employee(e){

		var empname=$('#empname').val();
		var doj=$('#doj').val();
		var address=$('#address').val();
		var phoneNumber=$('#phoneNumber').val();
		var role=$('#role').val();
		var pay=$('#pay').val();
		empcount=localStorage.setItem('empcount');
		if(empname==''){
			var message='Employee Name cannot be empty';
			alertBox(e,message);
		}else if(address==''){
			var message='Please enter the Address';
			alertBox(e,message);
		}else if(doj==''){
			var message='Please enter the Date of Joining';
			alertBox(e,message);
		}else if(phoneNumber==''){
			var message='Please enter the Phone Number';
			alertBox(e,message);
		}else if(role==''){
			var message='Please enter the Role';
			alertBox(e,message);
		}else if(pay==''){
			var message='Please enter Employee basic pay';
			alertBox(e,message);
		}else {
			var empcount=0;
			localStorage.setItem(empcount++);
			empdetails=JSON.parse(sessionStorage.getItem('empdetails'));

			if(empdetails==null){
				empdetails=[];
			}
			var empdetail=JSON.parse(sessionStorage.getItem('empdetails'));
			var new_emp={
				"empcount":empcount,
				"empname":empname,
				"phoneNumber":phoneNumber,
				"address":address,
				"role":role,
				"doj":doj,
				"pay":pay
			}

			empdetails.push(new_emp);
			sessionStorage.setItem('empdetails',JSON.stringify(empdetails));
		
		}

	}


	function alertBox(e,message){
			$("input[type=submit]").attr("disabled", "disabled")
			$('#alertBox').append('<div class="alert alert-danger">'+
							    '<a href="#" id="close" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>'+
							    message+
							'</div>');			
			$("#close").click(function(e){
				
				$("input[type=submit]").removeAttr("disabled");
  				$('.alert').hide();

			});
			e.preventDefault();
	}



function displayEmployees(){


	var empList=sessionStorage.getItem('empdetails');
	var empcount=sessionStorage.getItem('empcount');
	if(empList!=null){
		$.each(empList,function(key, value){
			localStorage.setItem(empcount++);
			$('#empTable').append('<tr> '
				+'<td>'+value.empcount+'</td>'+
				+'<td>'+value.empname+'</td>'+
				+'<td>'+value.phoneNumber+'</td>'+
				+'<td>'+value.address+'</td>'+
				+'<td>'+value.doj+'</td>'+
				+'<td>'+value.role+'</td>'+
				+'<td>'+value.pay+'</td>'+
				+'</tr>');
		})
	}



}

});
