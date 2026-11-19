const base = import.meta.env.BASE_URL;

function shot(id, w = 768, h = 1024) {
  return {
    src: `${base}media/${id}.webp`,
    sm: `${base}media/${id}-480.webp`,
    w,
    h,
  };
}

export const media = {
  "doosan-las": shot("doosan-las"),
  "fendt-laka": shot("fendt-laka"),
  "doosan-pole": shot("doosan-pole"),
  drzewo: shot("drzewo"),
  bocian: shot("bocian"),
  "kabina-1": shot("kabina-1"),
  "kabina-2": shot("kabina-2"),
  "fendt-las": shot("fendt-las"),
  glowica: shot("glowica"),
  plac: shot("plac", 576, 1024),
  "po-wycince": shot("po-wycince"),
  "fendt-plac": shot("fendt-plac"),
};
