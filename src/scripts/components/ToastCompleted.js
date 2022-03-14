function ToastCompleted() {
    this.root = document.querySelector('#toast-completed');
    this.init = function () {
        this.open();
        this.closeTimeout();
        this.root.addEventListener("click", this.handleToastCompleted);
    };

    this.handleToastCompleted = (event) => {
        if (event.target.type === "button") {
            this.close();
        }
    };
    this.open = function () {
        this.root.classList.add("open");
    };

    this.close = function () {
        this.root.classList.remove("open");
    };

    this.closeTimeout = function () {
        setTimeout(() => {
            this.root.classList.remove("open");
        }, 4000);
    }
}

const toastCompleted = new ToastCompleted();

export { toastCompleted };