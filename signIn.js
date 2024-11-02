var request = indexedDB.open("/idbfs");
request.onsuccess = function(event) {
    var db = event.target.result;
    var transaction = db.transaction("FILE_DATA", "readwrite");
    var objectStore = transaction.objectStore("FILE_DATA");
    var storeName = "/idbfs/a4cde6f7db08abc1da0fa04a69529237/PlayerPrefs";
    objectStore.get(storeName).onsuccess = function(event) {
        var textEncoder = new TextEncoder("utf-8");
        var oldContent = event.target.result;
        text = Array.from(oldContent.contents);
        var yourNewText = newToken;
        console.log("your new text: ", yourNewText);
        var updatedBytes = textEncoder.encode(yourNewText);
        var DECODED = (new TextDecoder("utf-8")).decode(new Uint8Array(text));
        var startIndex = DECODED.indexOf("eyJ");
        var endIndex = startIndex + 172;
        console.log(updatedBytes);
        text.splice(startIndex, 172, ...updatedBytes);
        var modifiedText = new Uint8Array(text);
        console.log(modifiedText);
        oldContent.contents = modifiedText;
        var RQ = objectStore.put(oldContent, storeName);
        RQ.onsuccess = (event) => {
            location.reload()
        };
    };
};