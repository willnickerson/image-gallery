import template from './image-app.html';
import styles from './image-app.scss';
export default {
    template,
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {
    this.loading = true;
    this.styles = styles;
    this.view;
    this.selectedView = 'description';

    // $scope.$watch('app.view', () => {
    //     this.selectedView = 'description';
    // });
    this.get = () => {
        images.get()
            .then(images => {
                this.loading = false;
                this.images = images;
            });
    };

    this.get();

    this.remove = image => {
        this.loading = true;
        images.remove(image._id)
            .then(() => {
                this.loading = false;
                const index = this.images.indexOf(image);
                if(index > -1) this.images.splice(index, 1);
            });
    };

    this.add = image => {
        this.loading = true;
        images.add(image)
            .then(saved => {
                this.loading = false;
                this.images.push(saved);
            });
    };
    
}