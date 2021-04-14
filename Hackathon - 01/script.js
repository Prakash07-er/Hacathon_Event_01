const form = document.getElementById('myform')

form.addEventListener('submit', function(e)
{
    e.preventDefault()

    var search = document.getElementById('search').value


    var name = search.split(' ').join('');


    document.getElementById('result').innerHTML=""

    var url = ("https://api.github.com/users/"+name )

    async function git_user_search(){
        var result = await fetch(url);
        var data = await result.json();
        console.log(data);

        document.getElementById('result').innerHTML=`
        <a target = "_blank" href="https://www.github.com/${name}"> <img style="width:100px; height:100px; border-color:black; margin-right:40px;" src="${data.avatar_url}"/ > </a>
        `   
     }
     git_user_search()

})