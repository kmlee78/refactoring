function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write("</div>\n");
        });
}

function emitPhotoData(outStream, aPhoto) {
    outStream.write(`<p>title: ${aPhoto.title}</p>`);
    outStream.write(`<p>date: ${aPhoto.date.toDateString()}</p>`);
    outStream.write(`<p>location: ${aPhoto.location}</p>`);
}


/*------------------------refactoring-------------------------*/


function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location}</p>`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write("<div>\n");
            emitPhotoData(outStream, p);
            outStream.write(`<p>location: ${p.location}</p>`);
            outStream.write("</div>\n");
        });
}

function emitPhotoData(outStream, aPhoto) {
    outStream.write(`<p>title: ${aPhoto.title}</p>`);
    outStream.write(`<p>date: ${aPhoto.date.toDateString()}</p>`);
}