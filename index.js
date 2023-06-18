$.ajax({
    type : "get",
    url : "https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false",
    success : function(response){
        for(var i=0;i<response.result.length;i++)
        {
            var tableRow=`<tr>
                <td>${i+1}</td>
                <td>${response.result[i].firstName+" "+response.result[i].lastName}</td>
                <td>${response.result[i].handle}</td>
                <td>${response.result[i].organization}</td>
                <td>${response.result[i].rating}</td>
                <td>${response.result[i].rank}</td>
                <td>${response.result[i].country}</td>
                <td>${response.result[i].city}</td>
            </tr>`
            $('#tbody').append(tableRow);
        }
        $('#stats').DataTable();
    },
    error : function(error){
        console.log(error);
    }
})