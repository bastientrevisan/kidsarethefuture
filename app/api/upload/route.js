import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier trouvé' }, { status: 400 });
    }

    // Vérifier le type de fichier (images seulement)
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Seules les images sont autorisées' }, { status: 400 });
    }

    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Le fichier est trop volumineux (max 5MB)' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Générer un nom unique pour le fichier
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${timestamp}_${originalName}`;

    // Chemin vers le dossier public/articles
    const publicPath = join(process.cwd(), 'public', 'articles');
    const filePath = join(publicPath, fileName);

    // Créer le dossier s'il n'existe pas
    const { mkdir } = await import('fs/promises');
    try {
      await mkdir(join(process.cwd(), 'public', 'articles'), { recursive: true });
    } catch (error) {
      // Le dossier existe déjà
    }

    // Sauvegarder le fichier
    await writeFile(filePath, buffer);

    return NextResponse.json({ 
      message: 'Fichier uploadé avec succès',
      fileName: fileName,
      filePath: `articles/${fileName}`
    });

  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'upload du fichier' }, { status: 500 });
  }
}