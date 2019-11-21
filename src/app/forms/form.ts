export class Form {
    private formSelector = document.getElementsByName("selection");
    private forms = document.getElementsByClassName("form");
    private firstForm = document.getElementById("first-form") as HTMLDivElement;
    private secondForm = document.getElementById("second-form") as HTMLDivElement;
    private thirdForm = document.getElementById("third-form") as HTMLDivElement;

    private getB_aX = document

    constructor() {};

    public changeForm() {
        this.formSelector.forEach(e =>{
            e.addEventListener("change", (event) => {
                let value = event.target.id;

                this.firstForm.style.display = "none";
                this.secondForm.style.display = "none";
                this.thirdForm.style.display = "none";

                switch (value) {
                    case 'opt1':
                        this.firstForm.style.display = "block";
                      break;
                    case 'opt2':
                        this.secondForm.style.display = "block";
                      break;
                    case 'opt3':
                        this.thirdForm.style.display = "block";
                      break;
                    default:
                      break;
                  }
            });
        });
    }


}
