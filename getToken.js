var request = indexedDB.open("/idbfs");
request.onsuccess = function(e) {
    e.target.result.transaction("FILE_DATA", "readwrite").objectStore("FILE_DATA").get("/idbfs/a4cde6f7db08abc1da0fa04a69529237/PlayerPrefs").onsuccess = function(e) {
        new TextEncoder("utf-8"), text = Array.from(e.target.result.contents);
        var t = new TextDecoder("utf-8").decode(new Uint8Array(text)),
            o = t.indexOf("eyJ");
        var newBookmark = 'javascript:var newToken = "' + t.substring(o, o + 172) + '"; fetch("https://raw.githubusercontent.com/Phantomlnfinity/dashcraft-bookmarklets/refs/heads/main/signIn.js").then(data=>{data.text().then(text=>{eval(text)})});'
        document.write("<html><body><center><h1>Account Token</h1><p>Before you give your account token to anybody, make sure that you completely trust whoever you're giving it to. An account token allows somebody to have full, permanent access to your DashCraft account.<br><br><br>If you still want to get your token, here it is:</p>" + t.substring(o, o + 172) + "<style>html { height: 100%; width: 100%; color: lightgrey; scrollbar-color: grey black; scrollbar-width: none; font-family:Arial, Helvetica, sans-serif } body { align-content: center; text-align: center; background-color: #1a1a1a; } p { width: min(100%, 500px); } </style</body></html>"), document.close()
    }
};