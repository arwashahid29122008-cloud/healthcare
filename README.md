# CarePulse — Health Guidance & Emergency Contacts

A responsive, safety-first web prototype for general symptom guidance, emergency contact preparation, and compatible Bluetooth device discovery.

## Run locally

1. Install Node.js (LTS).
2. In this folder run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## Current features

- Responsive healthcare landing page and symptom intake form.
- Basic safety keyword warning for selected red-flag symptoms. This is not a diagnostic model and cannot rule out an emergency.
- Emergency contacts saved in the current browser using localStorage.
- User-initiated phone dialler link and WhatsApp message preparation.
- Browser support check and device selection through Web Bluetooth where available.

## Important limitations

- No disease diagnosis, prescription, or clinical decision support is provided.
- Keyword matching is incomplete. A negative result does not mean a person is safe.
- A normal web page cannot silently place WhatsApp calls, send messages, or control a connected phone. The user must review and initiate communication.
- Bluetooth discovery does not mean readings are available or clinically validated. Device-specific protocols and validation are required.
- Contact details are stored locally in this browser and are not synced or backed up.
- Do not enter sensitive medical or identifying information into this prototype.

## Before real-world deployment

Add clinical review, validated triage protocols, privacy/security controls, consent, secure authentication and storage, audit logging, monitoring, accessibility testing, and jurisdiction-specific emergency-service integration. Have the system reviewed by qualified medical, security, and legal professionals before use with patients.
