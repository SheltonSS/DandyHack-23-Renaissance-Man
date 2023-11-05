import * as elements from 'typed-html';

export const blankPage = (bodyInnerHtml: string,title: string) => {
    return(
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>
                <link href="../../assets/img/favicon.ico" rel="icon"></link>
                <link href="../../assets/vendor/aos/aos.css" rel="stylesheet"/>
                <link href="../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="../../assets/css/style.css" rel="stylesheet"></link>
                <script src="https://unpkg.com/htmx.org@1.9.3" integrity="sha384-lVb3Rd/Ca0AxaoZg5sACe8FJKF0tnUgR2Kd7ehUOG5GCcROv5uBIZsOqovBAcWua" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="../../assets/vendor/aos/aos.js"></script>
                <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../../assets/js/main.js"></script>
            </head>
            <body>
                {bodyInnerHtml}
            </body>
        </html>
    );
}
   
