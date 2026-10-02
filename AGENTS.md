---
status: active
canonical: true
doc_type: rules
---

# Pilot repository rules

- This repository is disposable and non-production.
- Change only `SMOKE.md` for the first Development OS execution test.
- Run `node scripts/check.mjs` before returning a result.
- Do not add credentials, network calls, dependencies or deployment configuration.
