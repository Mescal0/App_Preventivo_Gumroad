# 🎨 Imbianchino PRO - Preventivi Professionali

## ✨ Novità in questa versione

### 🖼️ Logo Integrato
- Il tuo logo "Imbianchino Verniciatore Arte" è ora visibile nell'header
- Icone PWA generate dal logo per iPhone/Android
- Branding coerente in tutta l'app

### 🎨 UI Completamente Rinnovata
- Palette colori coordinata al brand (blu #0f4a77, accento terracotta)
- Design più professionale e moderno
- Status bar fisso in basso con totale sempre visibile
- Animazioni fluide

### 📸 Gestione Foto Migliorata
- Pulsanti separati "Scatta" e "Galleria"
- Compressione automatica con feedback visivo
- Max 10 foto per preventivo
- Preview con eliminazione singola

### 💾 Archivio Avanzato
- Salvataggio completo con foto
- Caricamento preventivi precedenti
- Eliminazione con conferma

### 📄 PDF Professionale
- Layout migliorato con dati azienda
- Tabella dettagliata lavori
- Foto allegate su pagina separata
- IBAN per pagamenti

### 🔧 Altre Migliorie
- Listino prezzi più completo (14 voci)
- Altezza stanza default 2.7m
- IVA default 22%
- Nomi stanze suggeriti automaticamente
- Service Worker ottimizzato per offline

---

## 🚀 Deploy su Cloudflare Pages

### Opzione 1: Upload Diretto (5 minuti)

1. Vai su https://dash.cloudflare.com
2. **Workers & Pages** → **Create** → **Pages**
3. Seleziona **Upload assets**
4. Nome progetto: `imbianchino-pro`
5. **Trascina la cartella** con tutti i file
6. Clicca **Deploy**

✅ URL: `https://imbianchino-pro.pages.dev`

### Opzione 2: GitHub + Auto-Deploy

1. Crea repository su GitHub
2. Carica tutti i file
3. Collega Cloudflare Pages a GitHub
4. Ogni push = deploy automatico!

---

## 📁 Struttura File

```
imbianchino-pro/
├── index.html           ← App principale
├── manifest.webmanifest ← Config PWA
├── sw.js                ← Service Worker
├── Logo.png             ← Logo aziendale
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-192.png
    ├── icon-maskable-512.png
    ├── apple-touch-icon.png
    ├── favicon-32.png
    └── favicon-16.png
```

---

## 📱 Test su iPhone

1. **Avvia server locale:**
   ```bash
   npx http-server -p 5500
   ```

2. **Crea tunnel HTTPS:**
   ```bash
   cloudflared tunnel --url localhost:5500
   ```

3. **Su iPhone Safari:**
   - Apri l'URL del tunnel
   - Condividi → "Aggiungi a Home"
   - Apri la PWA installata

4. **Verifica:**
   - ✅ Header con logo
   - ✅ Foto dalla fotocamera
   - ✅ Funziona offline
   - ✅ PDF si genera
   - ✅ WhatsApp si apre

---

## ⚙️ Personalizzazione

### Nelle Impostazioni (⚙️):
- Modifica listino prezzi
- Aggiungi dati azienda (nome, P.IVA, IBAN)
- Personalizza termini e condizioni

### Nel Codice:
- Cambia colori in `:root` (linea ~8)
- Modifica logo in header

---

## 🆘 Troubleshooting

**Service Worker non si registra**
→ Serve HTTPS (usa cloudflared)

**Icone non appaiono su iPhone**
→ Svuota cache Safari, reinstalla PWA

**PDF non si scarica**
→ Controlla console browser (F12)

**Foto non si comprimono**
→ Verifica connessione internet (libreria CDN)

---

## 📞 Supporto

Per problemi tecnici, contatta Claude con:
- Screenshot dell'errore
- Browser e dispositivo usato
- Passi per riprodurre il problema

---

**Versione:** 3.0.0
**Data:** 6 Gennaio 2025
**Autore:** Marco (Imbianchino Verniciatore Arte)
