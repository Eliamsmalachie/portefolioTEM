# Portfolio Tizie Elie Malachie - Eliam's Tech

Portfolio web professionnel pour Tizie Elie Malachie, CEO du DIGITAL BUILDER CLUB & CENTER, spécialisé en transformation digitale et solutions numériques innovantes.

## 🎯 Fonctionnalités

- ✅ **Page d'accueil moderne** avec section hero impactante
- ✅ **Section À propos** détaillant l'expertise en transformation digitale
- ✅ **Section Services** présentant l'accompagnement des entrepreneurs et institutions
- ✅ **Section Projets** avec études de cas et réalisations
- ✅ **Section Compétences** listant les domaines d'expertise
- ✅ **Formulaire de contact fonctionnel** avec envoi d'email via EmailJS
- ✅ **Design responsive** optimisé pour mobile, tablette et desktop
- ✅ **Animations fluides** et transitions élégantes
- ✅ **Footer noir professionnel** avec logos des réseaux sociaux
- ✅ **Palette de couleurs professionnelle** (violet/bleu)
- ✅ **Typographie premium** (Poppins + Playfair Display)

## 📁 Structure du Projet

```
portfolio_tizie/
├── index.html          # Page principale HTML
├── css/
│   └── styles.css      # Styles CSS complets
├── js/
│   └── script.js       # JavaScript avec EmailJS
├── images/             # Dossier pour les images
└── README.md           # Ce fichier
```

## 🚀 Installation et Configuration

### 1. Configuration EmailJS pour le formulaire de contact

Le formulaire de contact utilise **EmailJS** pour envoyer les emails directement. Voici comment le configurer :

#### Étape 1 : Créer un compte EmailJS
1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur **Sign Up** et créez un compte gratuit
3. Confirmez votre email

#### Étape 2 : Configurer un service email
1. Dans le dashboard, allez à **Email Services**
2. Cliquez sur **Add Service**
3. Sélectionnez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID** (ex: `service_abc123xyz`)

#### Étape 3 : Créer un template email
1. Allez à **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Subject: {{subject}}

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}

Message:
{{message}}
```

4. Notez votre **Template ID** (ex: `template_abc123xyz`)

#### Étape 4 : Obtenir votre Public Key
1. Allez à **Account** > **API Keys**
2. Copiez votre **Public Key**

#### Étape 5 : Mettre à jour le fichier JavaScript
Ouvrez `js/script.js` et remplacez les valeurs :

```javascript
// Ligne 3 : Remplacez YOUR_PUBLIC_KEY_HERE
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Ligne 62-64 : Remplacez les IDs
const response = await emailjs.send(
    'YOUR_SERVICE_ID_HERE',      // Votre Service ID
    'YOUR_TEMPLATE_ID_HERE',     // Votre Template ID
    {
        to_email: 'tizie@eliamstech.com',  // Votre email
        // ...
    }
);
```

### 2. Ouvrir le portfolio

1. Extrayez le fichier ZIP
2. Double-cliquez sur `index.html` pour ouvrir dans votre navigateur
3. Ou utilisez un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si vous avez http-server installé)
npx http-server

# Puis ouvrez http://localhost:8000
```

## 🎨 Personnalisation

### Modifier les couleurs
Ouvrez `css/styles.css` et modifiez les variables CSS au début du fichier :

```css
:root {
    --primary-color: #623ed8;      /* Couleur principale */
    --secondary-color: #0066ff;    /* Couleur secondaire */
    --footer-bg: #1a1a1a;          /* Couleur du footer */
    /* ... */
}
```

### Modifier le contenu
Ouvrez `index.html` et modifiez directement :
- Les sections (hero, about, services, projects, skills, contact)
- Les textes et descriptions
- Les liens des réseaux sociaux dans le footer

### Ajouter des images
1. Placez vos images dans le dossier `images/`
2. Référencez-les dans le HTML :
```html
<img src="images/votre-image.jpg" alt="Description">
```

## 📞 Réseaux Sociaux

Le footer inclut les liens vers les réseaux sociaux. Modifiez les URLs dans `index.html` :

```html
<a href="https://facebook.com/votre-profil" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>
```

Réseaux sociaux inclus :
- Facebook
- LinkedIn
- X (Twitter)
- GitHub
- TikTok
- Instagram
- WhatsApp

## 🔧 Fonctionnalités JavaScript

### Animations
- Animations au scroll
- Transitions fluides au survol
- Parallax effect sur la section hero
- Animations des cartes

### Interactivité
- Menu mobile responsive
- Smooth scroll
- Validation du formulaire
- Notifications toast
- Détection du mode hors ligne

### Clavier
- Appuyez sur **C** pour aller à la section Contact

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les appareils :
- **Desktop** : 1024px et plus
- **Tablette** : 768px - 1023px
- **Mobile** : Moins de 768px

## 🔒 Sécurité

- Validation côté client du formulaire
- Pas de stockage de données sensibles
- EmailJS gère le chiffrement des emails
- Pas de backend exposé

## ⚡ Performance

- CSS minifié et optimisé
- JavaScript asynchrone
- Images optimisées
- Lazy loading des polices Google

## 🐛 Dépannage

### Le formulaire ne fonctionne pas
1. Vérifiez que vous avez remplacé les clés EmailJS
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Assurez-vous que votre service email EmailJS est activé

### Les animations ne s'affichent pas
1. Vérifiez que le CSS est chargé correctement
2. Vérifiez que JavaScript n'a pas d'erreurs
3. Essayez de vider le cache du navigateur (Ctrl+Shift+Delete)

### Les réseaux sociaux ne s'ouvrent pas
1. Vérifiez que les URLs sont correctes
2. Assurez-vous que les comptes existent
3. Vérifiez les paramètres de sécurité du navigateur

## 📝 Licence

Ce portfolio est propriétaire et réservé à Tizie Elie Malachie.

## 📞 Support

Pour toute question ou problème :
- Email : tizie@eliamstech.com
- Téléphone : +1 (555) 123-4567

---

## 🎓 Ressources Utiles

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

---

**Créé avec ❤️ pour Tizie Elie Malachie - Eliam's Tech**

Dernière mise à jour : Décembre 2024
