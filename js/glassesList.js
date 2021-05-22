export class GlassesList {
    constructor() {
        this.glist = [];
    }
    addGlasses(glasses) {
        this.glist.push(glasses);
    }
    renderGlasses() {
        // Các thẻ HTML chưa nội dung của các đối tượng kính
        let content = "";
        // reduce(nội dung mún return, phần tử, index ) => có thể return
        content = this.glist.reduce((glContent, item, index) => {
            //glContent = glContent (nội dung cũ) + ` Nội dung mới`
            glContent += `
                <div class="col-4 d-flex align-items-center">
                    <img class="img-fluid vglassess__items" data-id="${item.id}" onclick="tryOnGlasses(event)" src="${item.src}" alt="glasses">
                </div>
            `;  // (event): nơi chứa thông tin khi click
            return glContent; // đẩy return cho biến content
        }, ""); // "" Khai báo kết quả ban đầu
        return content; // đẩy return cho renderGlasses
    }


}