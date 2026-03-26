# 📱 Upload de Imagem

App simples em React Native (Expo) que permite tirar uma foto, simular o envio para uma API e exibir um score como resultado.

---

## 🚀 Como rodar

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npx expo start
```

Depois disso:

* pressione `a` para abrir no emulador Android
* ou use o Expo Go para escanear o QR Code

---

## 🧠 Decisões técnicas

**Zustand para estado global**
Usei Zustand por ser simples e direto. O app controla imagem, status, erro e score, então não há necessidade de uma solução mais complexa.

---

**Separação em camadas**
Organização do projeto:

* components (UI)
* hooks (lógica)
* services (simulação de API)
* utils (helpers)
* store (estado)

Isso facilita manutenção e leitura do código.

---

**Controle de estado**
Estados utilizados:

* `idle`
* `loading`
* `success`
* `error`

A UI reage de forma previsível em cada etapa do fluxo.

---

**Simulação de erro no upload**
A primeira tentativa falha de propósito para validar o fluxo de erro e retry.
Na segunda tentativa, o envio é concluído com sucesso.

---

**Retry manual**
Em caso de erro, é exibido um alerta com opção de tentar novamente.

---

**Bloqueio durante envio**
Durante o upload:

* botões ficam desabilitados
* evita múltiplos envios simultâneos

---

**Persistência**
O último score é salvo com AsyncStorage e restaurado ao abrir o app.
