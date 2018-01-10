    // Declaring instances
    const pathname = window.location.pathname,
    extention = pathname.slice(15),
    form = $("#big-form"),
    pollAPI =`https://my-little-cors-proxy.herokuapp.com/https://damp-mesa-40326.herokuapp.com/notebook/${extention}`;
    
    // setting up function using jquery to update question & option dynamically
    const header = data => {
        $("#question").text(data.questionTitle),
        $("#optionOne").text(data.optionOne.option),
        $("#optionTwo").text(data.optionTwo.option),
        $("#optionThree").text(data.optionThree.option);
        return data;    
    }
    
    // click event listener
   const body = data =>{ form.on("submit", (event)=>{
        event.preventDefault(); 
        console.log(data.optionOne.vote)
        let result = $("input[type='radio']").serialize(),
        final=result.split('=');
        return $.ajax({
            url: `http://localhost:3000/notebook/${extention}`, // A valid URL
            type: 'PUT', 
            data: final[1]
        });
        })
    }
    // running function through promise.
    $.get(pollAPI)
        .then(header)
        .then(body)

