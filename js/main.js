$(function(){
var user={
    users:{
        first_name:"amit",
        last_name:"ben",
        degree:"stude",
        phone_user:"0503443416",
        area_user:"holon",
        email_user:"amit@gmail.com",
        about_me:"askjbdasdasasdasdasdsa",
    }
}

console.log('aaa',user);
    
    $('#intro header h1').text(user.users.first_name);
    $('#intro header h2').text(user.users.last_name);
    $('#intro header h3').text(user.users.degree);
    $('#intro section ul:eq(1) li:eq(0)').text(user.users.phone_user);
    $('#intro section ul:eq(1) li:eq(1)').text(user.users.area_user);
    $('#intro section ul:eq(1) li:eq(2)').text(user.users.email_user);
    $('#intro article p').text(user.users.about_me);
    
    
});