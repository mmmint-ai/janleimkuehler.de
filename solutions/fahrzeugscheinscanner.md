---
title: Fahrzeugschein Erkennung
subtitle: >-
  Mithilfe unserer Fahrzeugscheinerkennung können Sie ihre Fahrzeugscheine automatisiert auslesen.
  Wir verwenden deep-learning-based Object Detection und Texterkennung um die Fahrzeugscheine zu verarbeiten. Um eine sehr hohe Genauigkeit zu erreichen, wurde unsere Künstliche Intelligenz mit mehreren tausend Bildern angelernt. Folgende Postitionen kann unsere Künstliche Intelligenz automatisiert extrahieren: Vorname und Nachname, Anschrift, Kennzeichen, Fahrzeugidentifikationsnummer (FIN), Nächste HU und Erstzulassung, Hersteller-Code und Codetyp, Hersteller und Modell
share-img: images/product_registration_recognition.png
sections:
  - section_id: registrationrecognition
    component: features_block.html
    type: featuresblock
    bg: gray
    featureslist:
      - title: Künstliche Intelligenz zur Optimierung Ihrer Prozesse
        image: images/product_registration_recognition.png
        content: >-
          Mit Hilfe unserer digitalen Fahrzeugscheinerkennung können Sie Fahrzeugscheine automatisiert auslesen und in Ihr DMS-System über eine API-Schnittstelle importieren.
          <br/><br/>
          Wir verwenden deep-learning-based Object Detection und Texterkennung um die Fahrzeugscheine zu verarbeiten. Um eine sehr hohe Genauigkeit zu erreichen, wurde unsere Künstliche Intelligenz mit mehreren tausend Bildern angelernt. Folgende Postitionen kann unsere Künstliche Intelligenz automatisiert extrahieren:

          * Vorname und Nachname

          * Anschrift

          * Kennzeichen

          * Fahrzeugidentifikationsnummer (FIN)

          * Nächste HU und Erstzulassung

          * Codehersteller und Codetyp

          * Hersteller und Modell
        actions:
          - label: Go To API
            url: /solutions/fahrzeugschein.html

  - section_id: call-to-action
    component: cta_block.html
    type: ctablock
    title: Jetzt Demo anfordern!
    subtitle: Schicken Sie uns einfach eine kurze E-Mail und erhalten Sie eine Teststellung zu unserer Fahrzeugscheinerkennung. Gerne unterstützen wir Sie beratend hinsichtlich der Implementierung in Ihrem System. Sollte eine Schnittstellenbeschreibung Ihres DMS Systems vorhanden sein, können wir gerne in den Austausch gehen.
    actions:
      - label: Get digital
        url: "mailto:info@mmmint.ai"
  - section_id: pricing
    component: pricing_block.html
    type: pricingblock
    bg: gray
    title: Pricing
    subtitle: Gerne erstellen wir Ihnen ein individualisiertes Angebot.
    pricingplans:
      - title: Basic
        price: 19€/month
        details: |-
          * 150 Bilder inklusive
          * dann 0.15€ pro Bild
          * Bereitstellung Fahrzeugschein Overlay
          * Bereistellung API Dokumentation
          * Bereistellung Python SDK
        actions:
          - label: Order Now
            url: mailto:info@mmmint.ai
      - title: Professional
        price: 99€/month
        details: |-
          * 2000 Bilder inklusive
          * dann 0.08€ pro Bild
          * Bereitstellung Fahrzeugschein Overlay
          * Einführung in die API Spezifikation
          * Einführung in Python SDK
        highlight: true
        actions:
          - label: Order Now
            url: mailto:info@mmmint.ai
      - title: Enterprise
        price: individuell
        details: |-
          * Individuelle Preisgestaltung
          * Individuelle Vertragsvereinbarung
        actions:
          - label: get in contact
            url: mailto:info@mmmint.ai
  - section_id: faq
    component: faq_block.html
    type: faqblock
    bg: gray
    title: Frequently Asked Questions
    subtitle: FAQ
    faqitems:
      - question: Wie kann ich die Fahrzeugschein API benutzen?
        answer: >-
          Um einen vollumfänglichen Zugriff auf unsere API zu bekommen, wird ein individualisierter APIKey (`access_token`) benötigt. Gerne stellen wir Ihnen eine Teststellung zur Verfügung um den Anwendsfall explizit zu testen. Senden Sie uns hierzu bitte eine E-Mail an [info@mmmint.ai](mailto:info@mmmint.ai).
      - question: Werden die Fahrzeugscheine gemäß der DSGVO verarbeitet?
        answer: >-
          Alle bereitgestellten Services werden in deutschen Rechenzentren verarbeitet und gehosted. Übermittelte Datensätze werden in-transit und at-rest verschlüsselt. Ein Zugriff auf die Daten ist nur mit Hilfe des APIKey (`access_token`) möglich. Es wird strikt unter Einhaltung der gültigen DSGVO verarbeitet und gelagert.
      - question: Wie funktioniert die Fahrzeugschein API?
        answer: >-
          Gerne stellen wir Ihnen eine Teststellung bereit und testen live mit Ihnen die Verarbeitung. Anbei finden Sie einen Auszug aus unserer API Dokumentation:

            1. In order to use the registration recognition API you start by submitting an image via file upload, or with a publicly accessible image of the registration, using a POST to `/fahrzeugschein`.
            2. The asynchronous processing of the the recognition can be checked using the `/fahrzeugschein/status/` {sessionId} resource.
            3. After the status is finished, the recognized data can be retrieved using `/fahrzeugschein/{id}` resource.
            4. The bounding boxes and associated cropped images can be retrieved using the `/detection` resources.
            5. To retrieve all sessions for the submitted registration use the `/session` resource. The sessions will also indicate the status of all submissions.

layout: features
---
