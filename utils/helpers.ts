import swal from "sweetalert";

const showSwal = (title : any, icon : any, buttons : any) => {
  swal({ title, icon, buttons });
};



export { showSwal };
