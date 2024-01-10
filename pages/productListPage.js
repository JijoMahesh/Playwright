exports.ProductListPage = class ProductListPage {
    constructor(page) {
        this.page = page
        this.SingleProduct = page.locator('li')
        this.productSize = page.getByLabel('S', { exact: true })
        this.productSizeM = page.getByLabel('M', { exact: true })
        this.productSizeL = page.getByLabel('L', { exact: true })
        this.productColorGreen = page.getByLabel('Green')
        this.addToCartBtn = page.locator('button').last()
    }

    async selectSingleProductToAddToCard(ProductName,size,color){
        const selectedProduct = this.SingleProduct.filter({ hasText: ProductName })
        await selectedProduct.hover();
        const productSize = selectedProduct.getByLabel(size, { exact: true })
        await productSize.click();
        const productColor = selectedProduct.getByLabel(color)
        await productColor.click();
        await selectedProduct.hover();
        await selectedProduct.locator('button').last().click();
    }
}