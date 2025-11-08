// Fonction pour détecter et rendre les URLs cliquables
export function renderContentWithLinks(content) {
  if (!content) return null;
  
  // Regex pour détecter les URLs (http, https, www)
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    // Ajouter le texte avant l'URL
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }
    
    // Ajouter l'URL comme lien cliquable
    const url = match[0];
    const href = url.startsWith('www.') ? `https://${url}` : url;
    parts.push(
      <a 
        key={match.index} 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        {url}
      </a>
    );
    
    lastIndex = match.index + url.length;
  }
  
  // Ajouter le reste du texte après la dernière URL
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }
  
  // Si aucune URL n'a été trouvée, retourner le contenu original
  return parts.length > 0 ? parts : content;
}
