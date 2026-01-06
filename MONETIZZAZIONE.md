# 💰 Imbianchino PRO - Guida Monetizzazione

## 📦 Contenuto del Pacchetto

```
imbianchino-pro-complete/
├── landing.html      ← Landing page per vendere
├── app.html          ← App con Free+Ads e PRO
├── manifest.webmanifest
├── sw.js
├── Logo.png
└── icons/
```

---

## 🚀 Come Iniziare a Guadagnare

### STEP 1: Configura Gumroad (10 min)

1. Vai su **https://gumroad.com** e crea account
2. Clicca **"New Product"**
3. Configura:
   - **Tipo:** Digital Product
   - **Nome:** Preventivo PRO - Licenza Lifetime
   - **Prezzo:** €19 (o $21)
   - **Descrizione:** Copia da landing.html

4. **IMPORTANTE - Genera codici licenza:**
   - Apri `app.html?gencode` nel browser
   - Guarda la console (F12)
   - Copia il codice generato
   - In Gumroad: **"Content" → "License Keys"**
   - Incolla i codici (uno per riga)
   - Genera 50-100 codici all'inizio

5. **Pubblica** il prodotto

6. **Copia il link** del prodotto Gumroad

### STEP 2: Aggiorna i File

Nei file `landing.html` e `app.html` cerca e sostituisci:

```
https://tuonome.gumroad.com/l/preventivo-pro
```

Con il tuo link Gumroad reale.

---

## 📺 Configura Google AdSense (Pubblicità)

### Crea Account AdSense

1. Vai su **https://adsense.google.com**
2. Registrati con Google Account
3. Aggiungi il tuo sito (dopo deploy)
4. Attendi approvazione (1-14 giorni)

### Una volta approvato:

1. Crea una **unità pubblicitaria** (Ad Unit):
   - Tipo: Display Ads
   - Dimensione: Responsive

2. Copia il **codice AdSense**

3. In `app.html` sostituisci:
```html
<!-- Sostituisci ca-pub-XXXXXXXXXX -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
```

E in ogni `<ins class="adsbygoogle">`:
```html
data-ad-client="ca-pub-XXXXXXXXXX"
data-ad-slot="YYYYYYYYYY"
```

---

## 🔑 Sistema Licenze - Come Funziona

### Algoritmo Validazione

Il codice licenza deve:
1. Iniziare con un prefisso valido: `PRO2025`, `IMBIAN`, `VERNIX`
2. Avere almeno 16 caratteri
3. La somma dei codici ASCII deve essere divisibile per 7

### Generare Codici Validi

```javascript
// Apri app.html?gencode e guarda la console
// Oppure usa questa funzione:

function generateLicenseCode() {
  const prefix = 'PRO2025';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = prefix;
  while (code.length < 15) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  let sum = 0;
  for (let i = 0; i < code.length; i++) {
    sum += code.charCodeAt(i);
  }
  const r = sum % 7;
  if (r !== 0) code += chars[7 - r];
  return code.match(/.{1,4}/g).join('-');
}
```

### Codici di Esempio Validi

Ecco 20 codici pronti da usare su Gumroad:

```
VERN-IXEQ-5V4Y-Z46C
PRO2-0259-8L28-Z4VG
PRO2-025T-B7A8-HQAG
PRO2-025Q-GQX7-JWCC
VERN-IX38-BZW6-TKDE
IMBI-ANSV-EHPY-7TXB
IMBI-ANVG-WVY8-T57A
PRO2-025A-QCCH-CSFG
PRO2-025Q-2DQA-H7MB
PRO2-0257-LHE9-3FBG
IMBI-ANPT-BNJZ-6Y8B
PRO2-025M-V3G4-5A9D
PRO2-025D-TECG-YRDB
IMBI-ANAJ-84G4-CPFB
PRO2-025L-CV7H-VBAA
PRO2-025S-SSFR-5LGA
VERN-IXRC-4NDC-F3NB
VERN-IXTK-HLZ8-VR6C
IMBI-ANBN-QA3G-XKBD
IMBI-ANF8-XFHH-DHDB
```

**Il tuo ID AdSense:** `ca-pub-7152938900774894`

---

## 🌐 Deploy su Cloudflare Pages

1. Vai su **dash.cloudflare.com**
2. **Workers & Pages** → **Create** → **Pages**
3. **Upload assets**
4. Trascina tutta la cartella
5. Nome progetto: `preventivo-pro`
6. Deploy!

**URL:** `https://preventivo-pro.pages.dev`

### Struttura URL Consigliata

- `preventivo-pro.pages.dev` → landing.html (rinomina in index.html)
- `preventivo-pro.pages.dev/app` → app.html

---

## 💵 Stima Guadagni

### Con Pubblicità (AdSense)

| Utenti/mese | Page Views | Guadagno stimato |
|-------------|------------|------------------|
| 100         | 500        | €1-3             |
| 1.000       | 5.000      | €10-30           |
| 10.000      | 50.000     | €100-300         |

*RPM medio Italia: €2-5 per 1000 visualizzazioni*

### Con Vendite PRO

| Vendite/mese | Guadagno |
|--------------|----------|
| 5            | €85      |
| 20           | €340     |
| 50           | €850     |

*Gumroad trattiene ~10%, tu ricevi ~€17 per vendita*

---

## 📣 Marketing Suggerito

### Gratis
- Gruppi Facebook imbianchini/artigiani
- Forum edilizia (edilportale, etc.)
- Video TikTok/Reels (demo app)
- WhatsApp a colleghi

### A Pagamento (quando guadagni)
- Facebook Ads (€5-10/giorno)
- Google Ads su keyword "preventivo imbianchino"

---

## ⚖️ Fiscalità (Recap)

### Sotto €5.000/anno
- Dichiari come "redditi diversi" nel 730
- Paghi IRPEF (23-35%)
- **NO P.IVA necessaria**

### Sopra €5.000/anno
- Valuta P.IVA forfettaria
- 5% tasse primi 5 anni
- 15% dopo

---

## ✅ Checklist Lancio

- [ ] Account Gumroad creato
- [ ] Prodotto pubblicato con prezzo €19
- [ ] Codici licenza generati (50+)
- [ ] Link Gumroad aggiornato nei file
- [ ] Deploy su Cloudflare
- [ ] Test acquisto (usa codice sconto 100%)
- [ ] Account AdSense richiesto
- [ ] Primo post nei gruppi Facebook

---

## 🆘 Supporto

Problemi? Torna da Claude con:
- Screenshot errore
- Descrizione del problema
- Browser/dispositivo usato

---

**Buona fortuna con la monetizzazione! 🚀💰**
