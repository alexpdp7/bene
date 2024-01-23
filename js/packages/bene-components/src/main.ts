import "./block-links";
import "./code-description";
import "./dfn-links";
import "./syntax-highlight";

function retryHash() {
  // setTimeout to ensure this doesn't run until the next (tick? paint?),
  // so all modifications made by imported scripts are in the document
  setTimeout(() => {
    var requestedHash = location.hash.slice(1);
    location.hash = "";
    location.hash = requestedHash;
  });
}
retryHash();

console.log("Loaded component script.");