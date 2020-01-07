import { Component, OnInit, AfterViewInit } from '@angular/core';
import THREELib from 'three-js';
// import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  renderer: any;
  box: any;
  scene: any;
  camera: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const Three = THREELib([
      'EffectComposer',
      'OrbitControls'
    ]);
    this.renderer = new Three.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(540, 540);

    this.scene = new Three.Scene();
    this.camera = new Three.PerspectiveCamera(45, 540 / 540);
    this.camera.position.set(0, 0, +1000);

    const geometry = new Three.BoxGeometry(400, 400, 400);
    const material = new Three.MeshNormalMaterial();
    this.box = new Three.Mesh(geometry, material);
    this.scene.add(this.box);

    const tick = () => {
      console.log('ticking');
      requestAnimationFrame(tick);
      // アニメーション処理をここに書く
      this.box.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera); // レンダリング
    };

    tick();
  }

  // tick(): any {
  //   console.log('ticking');
  //   // requestAnimationFrame(this.tick);
  //   // アニメーション処理をここに書く
  //   this.box.rotation.y += 0.01;
  //   return this.renderer.render(this.scene, this.camera); // レンダリング
  // }
}
