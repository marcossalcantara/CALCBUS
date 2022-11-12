function calcular() {
    //CAPTURANDO OS IDS DOS INPUTS
    let passagens = document.querySelector("#passage").value
    let diario = document.querySelector("#price-day").value
    let diasviagens = document.querySelector("#travel").value


    //CALCULANDO O VALOR UNITÁRIO
    let valor_unitario = Math.ceil((diario * diasviagens) / passagens)


    document.querySelector("#view-results").innerHTML =`
    <p>O valor <strong>unitário</strong> é:</p>
    <article id="price-camp">
        <p>
            <small>R$</small>
            <strong id="price">00,00</strong>
        </p>
    </article>
    <article id="results">
        <p class="text-p">Orçamento por <strong>dias de viagem</strong>:</p>


        <!-- === PRIMEIRA BARRA DE PROGRESSO ===-->
        <div class="for-days">
            <div class="days">
                <p>Viajo <strong>1 DIA</strong></p>
                <p>R$ <strong id="price-one">00,00</strong></p>
            </div>
            <div class="bar-full">
                <div class="bar-progress-one">
                </div>
            </div>
        </div>

        <!-- === SEGUNDA BARRA DE PROGRESSO ===-->
        <div class="for-days">
            <div class="days">
                <p>Viajo <strong>2 DIAS</strong></p>
                <p>R$ <strong id="price-two">00,00</strong></p>
            </div>
            <div class="bar-full">
                <div class="bar-progress-two">
                </div>
            </div>
        </div>

        <!-- === TERCEIRA BARRA DE PROGRESSO ===-->
        <div class="for-days">
            <div class="days">
                <p>Viajo <strong>3 DIAS</strong></p>
                <p>R$ <strong id="price-three">00,00</strong></p>
            </div>
            <div class="bar-full">
                <div class="bar-progress-three">
                </div>
            </div>
        </div>

        <!-- === QUARTA BARRA DE PROGRESSO ===-->
        <div class="for-days">
            <div class="days">
                <p>Viajo <strong>4 DIAS</strong></p>
                <p>R$ <strong id="price-four">00,00</strong></p>
            </div>
            <div class="bar-full">
                <div class="bar-progress-four">
                </div>
            </div>
        </div>

        <!-- === QUINTA BARRA DE PROGRESSO ===-->
        <div class="for-days">
            <div class="days">
                <p>Viajo <strong>5 DIAS</strong></p>
                <p>R$ <strong id="price-five">00,00</strong></p>
            </div>
            <div class="bar-full">
                <div class="bar-progress-five">
                </div>
            </div>
        </div>

    </article>
    `

    //CAPTURANDO OS CAMPOS DE SUBSTITUIÇÃO DE VALORES
    let price = document.querySelector("#price")
    let price_one = document.querySelector("#price-one")
    let price_two = document.querySelector("#price-two")
    let price_three = document.querySelector("#price-three")
    let price_four = document.querySelector("#price-four")
    let price_five = document.querySelector("#price-five")


    //INSERINDO OS DADOS NO APP
    price.innerHTML = valor_unitario
    price_one.innerHTML = valor_unitario * 1
    price_two.innerHTML = valor_unitario * 2
    price_three.innerHTML = valor_unitario * 3
    price_four.innerHTML = valor_unitario * 4
    price_five.innerHTML = valor_unitario * 5


}