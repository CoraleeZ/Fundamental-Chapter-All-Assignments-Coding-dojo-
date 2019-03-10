function rerturn(arr) {
    var arr = s.split("");
    var obj = {},
        startt = 0,
        endd = 0,
        st = 0,
        leng = 0;
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] >= startt) {
            if (leng < i - st) {
                endd = i - 1;
                startt = obj[arr[i]];
                leng = endd - startt + 1;
            }
            st = obj[arr[i]] + 1;
        }
        obj[arr[i]] = i;
    }
    if (leng < arr.length - st) {
        startt = st;
        endd = arr.length - 1;
    }
    var newarr = [startt, endd];
    return newarr;
}