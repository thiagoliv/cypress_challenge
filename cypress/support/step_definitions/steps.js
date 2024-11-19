import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../pages/homePage"
import PdpPage from "../pages/pdpPage"
import MinicartPage from "../pages/minicartPage"
import CheckoutPage from "../pages/checkoutPage"

import authCookie from "../../fixtures/auth.json"


Given('that im on homepage', () => {
    HomePage.visitHome('/')
})

When('i do login', () => {
    HomePage.clickLoginIcon()
    HomePage.clickEmailPasswordOption()
    HomePage.typeEmailLogin('thiagocboliveira156@gmail.com')
    HomePage.typePasswordLogin('@Teste2024')
    HomePage.clickEnterLogin()
})

Then('user should be logged', () => {
    HomePage.validateAuthCoockie(authCookie.authLoginCookie)
})

Given('i add a product to the cart', () => {
    PdpPage.visitPdp('/chinelo-slide-unissex-preto/p')
    PdpPage.selectFirstSize()
    PdpPage.clickAddToMinicart()
    MinicartPage.clickProceedToCheckout()
    CheckoutPage.clickProceedToOrderForm()
})

When('fill purchase data', () => {
    CheckoutPage.typeProfileFirstName('Thiago')
    CheckoutPage.typeProfileLastName('Oliveira')
    CheckoutPage.typeProfileDocument('20354493086')
    CheckoutPage.typeProfilePhone('16994626576')
    CheckoutPage.clickProceedToShipping()
    CheckoutPage.typeShippingPostalCode('84016330')
    CheckoutPage.typeShippingNumber('123')
    CheckoutPage.clickProceedToPayment()
})

Then('finish the order', () => {
    CheckoutPage.validateBtnPaymentSubmit()
})

Given('that im on PDP', () => {
    PdpPage.visitPdp('shorts-masculino-longo-minimal-preto/p')
})

Then('product must have image', () =>{
    PdpPage.validateImageGallery()
})
