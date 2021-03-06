/**
 * For webistes that already provide Bootstrap JavaScript.
 *
 * Examples: Weblate (l10n.opensuse.org), Cachet (status.opensuse.org)
 */

require("./components/icons");
require("./components/megamenu");
require("./components/toc");

if (document.body.classList.contains("mediawiki")) {
  require("./chameleon-wiki");
}
