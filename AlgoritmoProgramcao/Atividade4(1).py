valor = float(input("Digite o valor da compra: "))
codigo = int(input("Digite o código da forma de pagamento: "))

if codigo == 1:
    parcela = valor * 0.90
elif codigo == 2:
    parcela = valor * 0.95
elif codigo == 3:
    parcela = valor / 5
elif codigo == 4:
    parcela = (valor * 1.15) / 10

print(f"Valor da parcela: R$ {parcela:.2f}")