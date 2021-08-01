const verifytime = (req,res,next) => {
    let days = new Date ().getDay();
    let hour = new Date ().getHours();

    if ( days < 6 && days > 0 && hour >= 9 && hour < 17 ){

            next();

        } else {
            res.send("The web application is only available during working hours ('Monday to Friday,  from 9 to 17')");
        }
};

module.exports=verifytime;