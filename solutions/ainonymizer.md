---
title: AInonymizer
subtitle: >-
  Verwenden Sie unsere Künstliche Intelligenz zur automatisierten Anonymisierung von Kennzeichen und Gesichtern - der AInonymizer!
layout: features
share-img: images/solutions/ainonymizer/undraw_both_sides_hbv3.png
sections:
  - section_id: ainonymizer
    component: features_block.html
    type: featuresblock
    bg: gray
    featureslist:
      - title: Bilder anonymisieren
        image: images/solutions/ainonymizer/undraw_both_sides_hbv3.svg
        content: >-
          Verwenden Sie unsere Künstliche Intelligenz zur automatisierten <mark>Anonymisierung</mark> von Kennzeichen und Gesichtern.
          <br/>
          Mit dem AInonymizer Service von mmmint.ai können Sie Gesichter und Kennzeichen auf Fotos unkenntlich machen.
          Der zu anonymisierenden Bereich wird verpixelt, um die Informationen und personenbezogenen Daten unkenntlich zu machen.
        actions:
          - label: Zur API
            url: /solutions/ainonymizer_api.html
  - section_id: call-to-action
    component: cta_block.html
    type: ctablock
    title: Jetzt Demo anfordern!
    subtitle: Bei Interesse schicken Sie uns einfach eine kurze E-Mail. Wir erstellen Ihnen einen Testzugang zu unserem AInonymizer-Service. Gerne unterstützen wir Sie beratend hinsichtlich der Implementierung in Ihr System.
    actions:
      - label: Go AInonymous
        url: "mailto:info@mmmint.ai"
  - section_id: blurred
    component: image_compare_block.html
    title: Ein Beispiel
    subtitle: Ziehen Sie einfach den Slider um das Vorher-Nachher-Bild zu vergleichen!
    image:
      right:
        src: /images/solutions/ainonymizer/city-blurred.jpg
        alt: Anonymisiert
      left:
        src: /images/solutions/ainonymizer/city-original.jpg
        alt: Original
  - section_id: pricing
    component: pricing_block.html
    type: pricingblock
    bg: white
    title: Pricing
    subtitle: Gerne erstellen wir Ihnen ein individualisiertes Angebot.
    pricingplans:
      - title: Basic
        price: 15€/month
        details: |-
            * 100 Bilder inklusive
            * dann 0.05€ pro Bild
            * Bereitstellung API Dokumentation
            * Bereitstellung Python SDK
        actions:
          - label: Order Now
            url: mailto:info@mmmint.ai
      - title: Professional
        price: 100€/month
        details: |-
            * 2000 Bilder inklusive
            * dann 0.01€ pro Bild
            * Einführung in die API Spezifikation
            * Einführung in Python SDK
        highlight: true
        actions:
          - label: Order Now
            url: mailto:info@mmmint.ai
      - title: Enterprise
        price: Individuell
        details: |-
            * Individuelle Preisgestaltung
            * Individuelle Vertragsvereinbarung
            * Individuelle technische Beratung
            * Individuelle Kooperation
        actions:
          - label: Kontakt
            url: mailto:info@mmmint.ai
  - section_id: faq
    component: faq_block.html
    type: faqblock
    bg: gray
    title: Frequently Asked Questions
    subtitle: FAQ
    faqitems:
      - question: Wie kann ich die AInonymizer API benutzen?
        answer: >-
            Um einen vollumfänglichen Zugriff auf unsere API zu bekommen, wird ein individualisierter APIKey (`access_token`) benötigt. Gerne stellen wir Ihnen eine Teststellung zur Verfügung, um den Anwendsfall explizit zu testen. Senden Sie uns hierzu bitte eine E-Mail an [info@mmmint.ai](mailto:info@mmmint.ai).
      - question: Werden die Bilder gemäß der DSGVO verarbeitet?
        answer: >-
            Alle bereitgestellten Services werden in deutschen Rechenzentren verarbeitet und gehosted. Übermittelte Datensätze werden in-transit und at-rest verschlüsselt. Ein Zugriff auf die Daten ist nur mit Hilfe des APIKey (`access_token`) möglich. Es wird strikt unter Einhaltung der gültigen DSGVO verarbeitet und gelagert. 
            <br/>
            Wir speichern keine Bilder ohne Anonymisierung. Alle Bilder und Videos werden nur für die Bearbeitung zu unseren Servern übermittelt und ausschließlich anonymisiert gespeichert. Das originale Bild kann zu keinem Zeitpunkt abgerufen werden.  
      - question: Wie funktioniert die AInonymizer API?
        answer: >-
            Gerne stellen wir Ihnen eine Teststellung bereit und testen live mit Ihnen die Verarbeitung. Anbei finden Sie einen Auszug aus unserer API Dokumentation. [[go to api documentation]](https://api.mmmint.ai/ainonymizer/v1/docs)
            <br/><br/>
            ```
            curl -X POST "https://api.mmmint.ai/ainonymizer/v1/ainonymize/?face=true&numberplate=true&logoinsertion=true&access_token=<access_token>" -H  "accept: application/json" -H  "Content-Type: multipart/form-data" -F "file=@car_face.jpg;type=image/jpeg"
            ```
            <br/>
            Replace `<access_token>` with your personal access_token requested from us [info@mmmint.ai](mailto:info@mmmint.ai). 
            <br/><br/>
            In order to use the anonymize API you start by submitting an image via file upload, using a POST to `/anonymize/`. You can decide to only anonymize faces (`?face=true`) and/or numberplates (`?numberplate=true`)  or both (`?face=true&numberplate=true`) . Also, it is possible to overlay the numberplates with custom images using `?logoinsertion=true`. 
            <br/><br/>
            ![Anonymized demo face and car](/images/solutions/ainonymizer/2314f3fed78c77b29373568b0740aac2124dab9150c8247c15ff7be374baa262.jpg)
      - question: Können auch Videos anonymisiert werden?
        answer: >-
            Ja, da Videos prinzipiell nur eine Aneinanderreihung von Bildern sind. Wir arbeiten gerade mit Hochdruck an einer Lösung zur Anonymisierung von Video-Material. Für einen <mark>early access</mark> Zugriff senden Sie uns bitte eine kurze E-Mail an [info@mmmint.ai](mailto:info@mmmint.ai).
            Wir sind immer offen für einen Austausch; gerne auch in Form eines Pilotprojektes mit Ihrem Unternehmen.
---
