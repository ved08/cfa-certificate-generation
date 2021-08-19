module.exports = ({ invoiceNum, name, phn, street, locality, state, aadhar, description, amount }) => {
    let date = new Date();
    date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return `
    <html>

    <head>
        <meta http-equiv=Content-Type content="text/html; charset=UTF-8">
        <style type="text/css">
            span.cls_003 {
                font-family: "Segoe UI", serif;
                font-size: 40.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_003 {
                font-family: "Segoe UI", serif;
                font-size: 40.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_004 {
                font-family: "Tw Cen MT", serif;
                font-size: 32.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_004 {
                font-family: "Tw Cen MT", serif;
                font-size: 32.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_005 {
                font-family: "Tw Cen MT", serif;
                font-size: 27.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_005 {
                font-family: "Tw Cen MT", serif;
                font-size: 27.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_002 {
                font-family: "Tw Cen MT", serif;
                font-size: 31.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_002 {
                font-family: "Tw Cen MT", serif;
                font-size: 31.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_007 {
                font-family: "Tw Cen MT", serif;
                font-size: 35.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_007 {
                font-family: "Tw Cen MT", serif;
                font-size: 35.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_006 {
                font-family: "Tw Cen MT", serif;
                font-size: 23.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_006 {
                font-family: "Tw Cen MT", serif;
                font-size: 23.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_008 {
                font-family: "Tw Cen MT", serif;
                font-size: 36.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_008 {
                font-family: "Tw Cen MT", serif;
                font-size: 36.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_009 {
                font-family: "Tw Cen MT", serif;
                font-size: 28.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_009 {
                font-family: "Tw Cen MT", serif;
                font-size: 28.1px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            span.cls_010 {
                font-family: Times, serif;
                font-size: 46.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
    
            div.cls_010 {
                font-family: Times, serif;
                font-size: 46.0px;
                color: rgb(0, 0, 0);
                font-weight: normal;
                font-style: normal;
                text-decoration: none
            }
            .parent-div {
                margin-top: 20px
            }
        </style>
    </head>
    
    <body>
        <div
            style="position:absolute;left:50%;margin-left:-629px;top:0px;width:1258px;height:856px;border-style:outset;overflow:hidden;margin-top:35px;">
            <div style="position:absolute;left:0px;top:0px">
                <img src="https://i.imgur.com/xGiSo4k.jpeg"
                    width=1258 height=856>
            </div>
            <div style="position:absolute;left:865.63px;top:111.10px" class="cls_003"><span class="cls_003">
                    Donation Receipt</span>
            </div>
            <div style="position:absolute;left:795.53px;top:163.71px" class="cls_004">
                <span class="cls_004">
                    Date
                </span>
                <span style="margin-left: 82px;" class="cls_004">
                    Donation Num
                </span>
            </div>
            <div style="position:absolute;left:755.24px;top:209.98px" class="cls_005">
                <span class="cls_005">
                    ${date}
                </span>
            </div>
            <div style="position:absolute;left:994.26px;top:207.90px" class="cls_002">
                <span class="cls_002">
                    ${invoiceNum}
                </span> 
            </div>
            <div style="position:absolute;left:83.49px;top:261.39px" class="cls_002">
                <span class="cls_002">
                    53, Jyothi Colony
                </span>
            </div>
            <div style="position:absolute;left:887.66px;top:288.36px" class="cls_007">
                <span class="cls_007">
                    Donor Info
                </span>
            </div>
            <div style="position:absolute;left:83.49px;top:297.72px" class="cls_002">
                <span class="cls_002">
                    Jupiter Colony,
                    Brooke Bond Colony
                </span>
            </div>
            <div style="position:absolute;left:83.49px;top:334.05px" class="cls_002">
                <span class="cls_002">
                    Karkhana, Hyderabad
                </span>
            </div>
            <div style="position:absolute;left:759.08px;top:361.77px" class="cls_006">
                <span class="cls_006">
                    ${name}
                </span>
            </div>
            <div style="position:absolute;left:83.49px;top:370.38px" class="cls_002">
                <span class="cls_002">
                    Telangana, 500015
                </span>
            </div>
            <div style="position:absolute;left:759.08px;top:392.10px" class="cls_006">
                <span class="cls_006">${phn}</span>
            </div>
            <div style="position:absolute;left:759.08px;top:422.44px" class="cls_006">
                <span class="cls_006">
                    ${street},
                </span>
            </div>
            <div style="position:absolute;left:759.08px;top:452.77px" class="cls_006">
                <span class="cls_006">${locality}</span>
            </div>
            <div style="position:absolute;left:759.08px;top:483.11px" class="cls_006">
                <span class="cls_006">${state}</span>
            </div>
            <div style="position:absolute;left:90.28px;top:479.36px" class="cls_002">
                <span class="cls_002">info@codingforall.in</span>
            </div>
            <div style="position:absolute;left:759.08px;top:513.44px" class="cls_006">
                <span class="cls_006">Aadhar number : ${aadhar}</span>
            </div>
            <div style="position:absolute;left:83.49px;top:515.69px" class="cls_002">
                <a href="https://www.codingforall.in/">https://www.codingforall.in/</a>
            </div>
            <div style="position:absolute;left:98.86px;top:602.14px" class="cls_008">
                <span class="cls_008">Description</span>
            </div>
            <div style="position:absolute;left:1050.80px;top:602.14px" class="cls_008">
                <span class="cls_008">Amount</span>
            </div>
            <div style="position:absolute;left:95.97px;top:672.52px" class="cls_009">
                <span class="cls_009">Purpose: ${description}
                </span>
            </div>
            <div style="position:absolute;left:910.69px;top:676.60px" class="cls_010">
                <span class="cls_010">₹ ${amount}/-</span>
            </div>
        </div>
    </body>
    
    </html>
    `
}