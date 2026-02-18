# Configuration EmailJS - Guide Complet

Ce guide vous aidera à configurer EmailJS pour que le formulaire de contact fonctionne correctement.

## 📋 Prérequis

- Un compte email (Gmail, Outlook, Yahoo, etc.)
- Un navigateur web
- 5 minutes pour la configuration

## 🔧 Étapes de Configuration

### 1️⃣ Créer un compte EmailJS

1. Visitez [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur **Sign Up** en haut à droite
3. Remplissez le formulaire d'inscription
4. Confirmez votre email via le lien reçu

### 2️⃣ Configurer un Service Email

1. Connectez-vous à votre compte EmailJS
2. Dans le menu de gauche, cliquez sur **Email Services**
3. Cliquez sur le bouton **Add Service**
4. Sélectionnez votre fournisseur email :
   - **Gmail** (recommandé)
   - Outlook
   - Yahoo
   - Autre

#### Pour Gmail :
1. Sélectionnez Gmail
2. Cliquez sur **Connect Account**
3. Autorisez EmailJS à accéder à votre Gmail
4. Cliquez sur **Create Service**
5. **Notez votre Service ID** (ex: `service_abc123xyz`)

### 3️⃣ Créer un Template Email

1. Dans le menu de gauche, cliquez sur **Email Templates**
2. Cliquez sur **Create New Template**
3. Remplissez le formulaire :

**Nom du Template :** `contact_form` (ou votre choix)

**Sujet :** `{{subject}}`

**Contenu HTML :**
```html
<h2>Nouveau message de contact</h2>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>
<p><strong>Téléphone :</strong> {{phone}}</p>

<h3>Sujet : {{subject}}</h3>

<h4>Message :</h4>
<p>{{message}}</p>

<hr>
<p><em>Message reçu depuis votre portfolio</em></p>
```

4. Cliquez sur **Save**
5. **Notez votre Template ID** (ex: `template_abc123xyz`)

### 4️⃣ Obtenir votre Public Key

1. Dans le menu de gauche, cliquez sur **Account**
2. Allez à l'onglet **API Keys**
3. Copiez votre **Public Key** (commence par `pk_`)
4. **Notez cette clé**

## 🔑 Mettre à Jour le Code

Ouvrez le fichier `js/script.js` et remplacez les valeurs :

### Ligne 3 - Public Key
```javascript
// AVANT
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// APRÈS (exemple)
emailjs.init("pk_abc123xyz_def456uvw");
```

### Ligne 62-64 - Service ID et Template ID
```javascript
// AVANT
const response = await emailjs.send(
    'YOUR_SERVICE_ID_HERE',      // Service ID
    'YOUR_TEMPLATE_ID_HERE',     // Template ID
    {
        to_email: 'tizie@eliamstech.com',
        // ...
    }
);

// APRÈS (exemple)
const response = await emailjs.send(
    'service_abc123xyz',         // Votre Service ID
    'template_abc123xyz',        // Votre Template ID
    {
        to_email: 'tizie@eliamstech.com',
        // ...
    }
);
```

### Ligne 67 - Email de réception
```javascript
// Remplacez par votre email
to_email: 'tizie@eliamstech.com',
```

## ✅ Tester la Configuration

1. Ouvrez `index.html` dans votre navigateur
2. Scrollez jusqu'à la section **Contact**
3. Remplissez le formulaire avec des données de test
4. Cliquez sur **Envoyer le message**
5. Vous devriez recevoir un email

## 🎯 Limites Gratuites EmailJS

- **500 emails/mois** (gratuit)
- **Pas de limite de contacts**
- **Support email**

Pour plus d'emails, passez à un plan payant.

## 🔐 Sécurité

- Votre **Public Key** est sûre à partager (elle est publique)
- Votre **Service ID** et **Template ID** sont aussi publics
- EmailJS gère le chiffrement des données

## 🐛 Dépannage

### "Invalid Public Key"
- Vérifiez que vous avez copié la bonne clé
- Assurez-vous qu'il n'y a pas d'espaces supplémentaires

### "Service not found"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service est activé dans EmailJS

### "Template not found"
- Vérifiez que le Template ID est correct
- Assurez-vous que le template est publié

### Pas d'email reçu
1. Vérifiez votre dossier spam
2. Vérifiez que votre service email est activé
3. Ouvrez la console (F12) pour voir les erreurs
4. Testez d'abord avec un email de test

## 📞 Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
- Email : support@emailjs.com

## ✨ Conseils

1. **Testez d'abord** avec un email de test
2. **Vérifiez le spam** si vous ne recevez pas d'email
3. **Gardez vos clés secrètes** (ne les partagez pas publiquement)
4. **Monitez votre utilisation** pour rester dans les limites gratuites

---

**Vous êtes prêt !** Votre formulaire de contact est maintenant fonctionnel.
