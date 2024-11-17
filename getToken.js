var request = indexedDB.open("/idbfs");
request.onsuccess = function(event) {
    event.target.result.transaction("FILE_DATA", "readwrite").objectStore("FILE_DATA").get("/idbfs/a4cde6f7db08abc1da0fa04a69529237/PlayerPrefs").onsuccess = function(event) {
        new TextEncoder("utf-8"), text = Array.from(event.target.result.contents);
        var DECODED = new TextDecoder("utf-8").decode(new Uint8Array(text)),
            startIndex = DECODED.indexOf("eyJ");
        var newBookmark = 'javascript:var newToken = "' + DECODED.substring(startIndex, startIndex + 172) + '"; fetch("https://raw.githubusercontent.com/Phantomlnfinity/dashcraft-bookmarklets/refs/heads/main/signIn.js", {cache: "no-cache"}).then(data=>{data.text().then(text=>{eval(text)})});'
        document.write(`
            <html>
            <head>
                <title>Account Token</title>
            </head>
            <body>
                <center>
                <h1>Account Token</h1>
                <p>Before you give your account token to anybody, make sure that you completely trust whoever you're giving it to. An account token allows somebody to have full, permanent access to your DashCraft account.<br><br><br>If you still want to get your token, here it is:</p>
                ${DECODED.substring(startIndex, startIndex + 172)}
                <br><button type="button" onclick="navigator.clipboard.writeText("${DECODED.substring(startIndex, startIndex + 172)}")">Copy token</button>
                <br><br><br>
                <p>If you came here for the sign in bookmarklet, drag the box to your bookmark bar.</p>
                <a class='bookmarklet' href='${newBookmark}'>Drag this to your bookmark bar!</a><br>
                <p>If you don't have a bookmark bar, press Ctrl+Shift+B (⌘+Shift+B on Mac)</p>
                <style>
                    html {
                        height: 100%;
                        width: 100%;
                        color: lightgrey;
                        scrollbar-color: grey black;
                        scrollbar-width: none;
                        font-family: Arial, Helvetica, sans-serif
                    }

                    body {
                        align-content: center;
                        text-align: center;
                        background-color: #1a1a1a;
                    }

                    p {
                        width: min(80%, 600px);
                    }

                    .bookmarklet {
                        background-color: lightgrey;
                        border-radius: 10px;
                        border-width: 0px;
                        padding: 10px;
                        color: black;
                        user-select: none;
                        cursor: pointer;
                        margin: 4px 2px;
                    }

                    button {
                        font-size: 16px;
                        box-shadow: 0 5px #999;
                    }

                    button:hover {background-color: rgb(180,180,180)}
                        button:active {
                            background-color: rgb(180,180,180);
                            box-shadow: 0 3px #666;
                            transform: translateY(2px);
                        }
                </style
            </body>
            </html>`
        )
        console.log(document)
        document.close()
    }
};