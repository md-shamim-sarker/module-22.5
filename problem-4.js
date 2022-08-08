function bestFriend(array) {
    let myBestFriend = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > myBestFriend.length) {
            myBestFriend = array[i];
        }
    }
    return myBestFriend;
}

const arr = ['Shamim Sarker', 'Snigdha', 'Sneha', 'Mony'];
console.log(bestFriend(arr));
