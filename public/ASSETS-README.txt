Use 2 folders inside public/:

  public/logos/
    raag.png
    og.png
    3dm.png
    social.png

  public/artists/
    faris-shafi.png
    havi.png
    mooroo.png
    nehaal.png
    ahsan-asif.png
    young-stunners.png
    farhan-saeed.png
    murtaza-qizilbash.png
    zoha-waseem.png
    shehreyar-khan.png

Favicon uses logos/raag.png. Missing artist images show a placeholder.

For logos to show: place files in public/logos/ with exact names above. Run "npm run dev" and open http://localhost:5173/ or http://localhost:5173/Raagfest/ — logos load from /logos/... (absolute path).
