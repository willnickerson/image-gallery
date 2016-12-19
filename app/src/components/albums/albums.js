import template from './albums.html';

export default {
    template,
    controller
};

controller.$inject = ['albumService'];

function controller(albums) {
    this.loading = true;

    albums.get().then(albums => {
        console.log('albums getting loaded', albums);
        this.loading = false;
        this.albums = albums;
    });
}