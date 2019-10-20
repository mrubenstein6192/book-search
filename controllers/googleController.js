

//response ammend to page exampe from Google, just saving here for now. This has to be called by our Routes.

export default {

    handleResponse: function (response) {
        for (let i = 0; i < response.items.length; i++) {
            //in production code, item.text should have the HTML entities escaped??
            document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
        }
    }

};