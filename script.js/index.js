var middleData =[
    
    {teamName:"ROYALS VS SUNRISERS",
     venue:"IPL 2022,PUNE",
     imageUrl:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/336900/336966.6.jpg",
     heading:"Moody blaames early no-ball for Sunries defeat",
     paragraph:"A no-ball wicket and a dropped catch off a no-ball,and a total of six wides cost us this game"
    },
     {teamName:"ROYALS VS SUNRISERS",
     venue:"IPL 2022,PUNE",
     imageUrl:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/336900/336966.6.jpg",
     heading:"Moody blaames early no-ball for Sunries defeat",
     paragraph:"A no-ball wicket and a dropped catch off a no-ball,and a total of six wides cost us this game"
    },
     {teamName:"ROYALS VS SUNRISERS",
     venue:"IPL 2022,PUNE",
     imageUrl:"https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/336900/336966.6.jpg",
     heading:"Moody blaames early no-ball for Sunries defeat",
     paragraph:"A no-ball wicket and a dropped catch off a no-ball,and a total of six wides cost us this game"
    }
];


middleData.map(function (elem)
{
    var box = document.createElement("div");

    var pic = document.createElement("img");
    img.src = elem.imageUrl;

    var venue = document.createElement("h6");
    venue.innerText=elem.venue;
    box.append(venue,pic);
    document.querySelector("container > #middle-side-box").append(box)

})






