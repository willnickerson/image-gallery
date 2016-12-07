import template from './image-app.html';
import styles from './image-app.css';
export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {

    images.get().then(images => {
        this.images = images;
    });
    
    this.styles = styles;
}