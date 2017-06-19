$(function(){
    var user={
        users:{
            first_name:"ami",
            last_name:"ben ur",
            degree:"stude",
            phone_user:"0503443416",
            area_user:"holon",
            email_user:"amit@gmail.com",
            about_me:"askjbdasdasasdasdasdsa",
        },

        social_networks:[{
            name:"facebook",
            iconName:"facebook-official",
            link:"facebook.com",
        },
                         {
                             name:"ynet",
                             iconName:"medium",
                             link:"ynet.co.il",
                         },
                         {
                             name:"google",
                             iconName:"youtube-play",
                             link:"google.com",
                         },
                         {
                             name:"mako",
                             iconName:"yahoo",
                             link:"mako.co.il",
                         },

                        ],

        users_experience:[{
            title:"good day israel",
            start_date:"Mar 2017",
            end_date:"Mar 2018",
            article_title:"my name is amit",
            article_text:"Amet massa Done cporttitor dolr er nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem impsum sollicitudin est porttitor. tempus id fringilla."
        },
                          {title:"good day usa",
                           start_date:"Mar 2017",
                           end_date:"Mar 2018",
                           article_title:"my name is amit",
                           article_text:"my name is amit and i am from holon, my name is amit"
                          },
                          {title:"good day america",
                           start_date:"Mar 2017",
                           end_date:"Mar 2018",
                           article_title:"my name is amit",
                           article_text:"Amet massa Done cporttitor dolr er nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem impsum sollicitudin est porttitor. tempus id fringilla."    }],

        users_education:[{
            title:"good day israel",
            start_date:"Mar 2017",
            end_date:"Mar 2018",
            article_title:"my name is amit",
            article_text:"Amet massa Done cporttitor dolr er nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem impsum sollicitudin est porttitor. tempus id fringilla."
        },
                         {title:"good day usa",
                          start_date:"Mar 2017",
                          end_date:"Mar 2018",
                          article_title:"my name is moshe",
                          article_text:"Java uses 0-based array indexes. When you create an Array of size 10 new int[10] it creates 10 integer 'cells' in the array. The indexes are: 0, 1, 2, ...., 8, 9. \n Your loop counts to the index which is 1 less than 11, or 10, and that index does not exist."
                         },
                         {title:"good day america",
                          start_date:"Mar 2017",
                          end_date:"Mar 2018",
                          article_title:"my name is amit",
                          article_text:"Java uses 0-based array indexes. When you create an Array of size 10 new int[10] it creates 10 integer 'cells' in the array. The indexes are: 0, 1, 2, ...., 8, 9. \n Your loop counts to the index which is 1 less than 11, or 10, and that index does not exist."    }],

        pro_skills:
        {
            photoshop:50,
            illustraor:80,
            javascript: 100,
            html_css:90,  
        },

        per_skills:
        {
            creativity:50,
            team_work:80,
            hard_works: 100,
            leader_ship:90,  
        },

        language:
        {
            english:100,
            spanish:25,
            french:0,
        },
        hobies:[{
            hobie_name:"photograpy",
            hobie_icon:"camera"
        },
                {
                    hobie_name:"pc",
                    hobie_icon:"gamepad"
                },
                {
                    hobie_name:"sport",
                    hobie_icon:"futbol-o"
                },
               ]

    }

    console.log(user);
    //add intro
    $('#intro header h1').text(user.users.first_name);
    $('#intro header h2').text(user.users.last_name);
    $('#intro header').append('<h3>'+user.users.degree+'</h3>')
    $('#intro section ul:eq(1) li:eq(0)').text(user.users.phone_user);
    $('#intro section ul:eq(1) li:eq(1)').text(user.users.area_user);
    $('#intro section ul:eq(1) li:eq(2)').text(user.users.email_user);
    $('#intro article p').text(user.users.about_me);

    $ul = $('<ul>', {
        'id': 'social-networks'
    });

    for(i in user.social_networks) { //We also got the social networks from the server, which is acceable from data.socialNetworks.
        var $templi = $('<li>');

        $templi.append('<i class="fa fa-'+user.social_networks[i].iconName+'"></i>');
        $templi.append('<a href="'+user.social_networks[i].link+'">     '+user.social_networks[i].name+'</a>');

        $templi.click(function(){
            alert($(this).children('a').text() + ' clicked!');
        });

        //Add the new li element to the ul
        $ul.append($templi);
    }

    $ul.insertAfter('#intro');



    //add experience
    for (j=user.users_experience.length-1; j>=0; j--){ // from 9 to 0
        $ula = $('<ul>', {});

        var $templi = $('<li>');

        $templi.append('<h2>'+user.users_experience[j].title+'</h2>'+'<h5>'+user.users_experience[j].start_date+" - "+user.users_experience[j].end_date+'</h5>');
        $ula.append($templi);
        var $templi2 = $('<li>');
        $templi2.append('<h6>'+user.users_experience[j].article_title+'</h6>'+'<div>'+user.users_experience[j].article_text+'</div>');
        //Add the new li element to the ul
        $ula.append($templi2);
        $ula.insertAfter('#experience-text h1');    } 

    //add education
    for (i=user.users_experience.length-1; i>=0; i--){ // from 9 to 0
        $ula = $('<ul>', {});

        var $templi = $('<li>');

        $templi.append('<h2>'+user.users_education[i].title+'</h2>'+'<h5>'+user.users_education[i].start_date+" - "+user.users_education[i].end_date+'</h5>');
        $ula.append($templi);
        var $templi2 = $('<li>');
        $templi2.append('<h6>'+user.users_education[i].article_title+'</h6>'+'<div>'+user.users_education[i].article_text+'</div>');
        //Add the new li element to the ul
        $ula.append($templi2);
        $ula.insertAfter('#education-text h1');    } 


    //add pro skills progress bars
    $ul = $('<ul>', {});
    var $temp=$('<li>');
    $temp.append('<progress value="'+user.pro_skills.photoshop+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.pro_skills.illustraor+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.pro_skills.javascript+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.pro_skills.html_css+'" max="100"></progress>');
    $ul.append($temp);
    $ul.insertAfter('#pro-skills ul:nth-child(1)');

    //add per skills progress bars
    $ul = $('<ul>', {});
    var $temp=$('<li>');
    $temp.append('<progress value="'+user.per_skills.creativity+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.per_skills.team_work+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.per_skills.hard_works+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.per_skills.leader_ship+'" max="100"></progress>');
    $ul.append($temp);
    $ul.insertAfter('#per-skills ul:nth-child(1)');

    //add language progress bars
    $ul = $('<ul>', {});
    var $temp=$('<li>');
    $temp.append('<progress value="'+user.language.english+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.language.spanish+'" max="100"></progress>');
    $ul.append($temp)
    ;$temp.append('<progress value="'+user.language.french+'" max="100"></progress>');
    $ul.append($temp)
    $ul.insertAfter('#language ul:nth-child(1)');

    //    $('#language ul:nth-child(2) li').append('<progress value="'+user.pro_skills.photoshop+'" max="100"></progress>')


    $ul = $('<ul>', {
        'id': 'hobies-icons'
    });

    for(i in user.hobies) { //We also got the social networks from the server, which is acceable from data.socialNetworks.
        var $templi = $('<li>');

        $templi.append('<i class="fa fa-'+user.hobies[i].hobie_icon+'"></i>');
        $templi.append('<div>'+user.hobies[i].hobie_name+'</div>');

       
        $ul.append($templi);
    }

    $ul.insertAfter('#hobies-template h1');

});